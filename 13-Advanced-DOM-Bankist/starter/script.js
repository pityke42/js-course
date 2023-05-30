'use strict';


const h1 = document.querySelector(' h1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//buttons
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//sections
const allSection = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');
///////////////////////////////////////


// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};





//BUTTONS
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Button Scrolling
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

//Getting the coordinates for scrolling
  console.log(e.target.getBoundingClientRect());

  //coordinates of the viewport
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  //    );
  
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: "smooth",
  })
});

//Page Navigation
///////////(EVENT DELEGATION)////////////
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){

    
//     
// });
//Event delegation
//1.Add event listener to common parent element
//2.Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  //Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});











////////////////////////////////////////////////////////////////////////////////////////
/*
//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements
//insertAdjacentHTML
const message = document.createElement('div');////////////message is a live element live element living in the DOM
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));/////child element also be copied

header.before(message);
// header.after(message);

//Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  // message.remove();
  message.parentElement.removeChild(message);/////DOM TRAVERSING (moving in the DOM tree)
});


//STYLES
 message.style.backgroundColor = '#37383d';
 message.style.width = '120%';

 console.log(message.style.backgroundColor);
 console.log(message.style.color);
 console.log(getComputedStyle(message).color);
 console.log(getComputedStyle(message).height);

 message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

 //CSS variables (custom properties)//
 document.documentElement.style.setProperty('--color-primary', 'orangered');

 //Attributes
 const logo = document.querySelector('.nav__logo');
 console.log(logo.src); 
 console.log(logo.alt);
 console.log(logo.className);
logo.alt = 'Beautiful, minimalist logo';

 //Non standart( does not work)
 console.log(logo.designer);

 console.log(logo.getAttribute('designer'));
 logo.setAttribute('company', 'Bankist');
 
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 =document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();//not includes()

//dont use this//overwrite everything
logo.className = 'jonas';

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading a heading')

  //deleting eventlistener
  h1.removeEventListener('mouseenter', alertH1);

}

h1.addEventListener('mouseenter', alertH1);


//deleting eventlistener after 3 seconds
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000);

// h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading a heading')
// };//oldschool one




///Event Propagation///Bubbling and Capturing
//rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColour = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColour(0, 255));


document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop Propagation
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor= randomColour();
  console.log('NAV', e.target, e.currentTarget);
});
*/