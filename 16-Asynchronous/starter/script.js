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
  // countriesContainer.style.opacity = 1;
};


const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
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

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if (!response.ok) {
    throw new Error(`country not found ${errorMsg} (${response.status})`);
    }
  return response.json();
  });
}


// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`country not found ${response.status}`);
//       }
//       return response.json();
//     }) //json() function returning another PROMISE)
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdasd';
//       if (!neighbour) return;

//       //Country 2 (neighbour)
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response =>{
//       if (!response.ok) {
//         throw new Error(`country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} error`);
//       renderError(`something went wrong ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('hungary');
// });

const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      //Country 2 (neighbour)
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'country not found');
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.error(`${error} error`);
      renderError(`something went wrong ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData('hungary');
});

getCountryData('asutralia');
*/
//Coding challange 1.
const whereAmI = function(lat, lon){
  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=a7b8065d7aa6413084aeb0b29122d5d1`)
  .then(res => {
    console.log(res)
    // if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log(data)
    console.log(`You are in ${data.name}, ${data.country}`)

    return fetch(`https://restcountries.com/v2/name/${data.country}`);
  })
  .then(res => {
    if(!res.ok) throw new Error(`location error ${res.status}`);
    return res.json();
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message} error`))
   
}

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(47.23490, 19.61270);