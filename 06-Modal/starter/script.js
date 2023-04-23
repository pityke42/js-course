'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnsOpenModal)

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const keydown = function(event){
        if(event.key === 'Escape'){
            if(!modal.classList.contains('hidden')){
                closeModal()
            }
        }
}
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
  
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', keydown)
}

