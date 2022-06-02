const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav-list');
const body = document.querySelector('body');
const logo = document.querySelector('.logo-container');

hamburger.addEventListener('click', function(){
 hamburger.classList.toggle('hamburger__open');
 nav.classList.toggle('dim-area__open');
 logo.classList.toggle('logo__hidden');
})

body.addEventListener('click', hideHamburger);

function hideHamburger(e){
  if(!e.target.classList.contains('hamburger')){
    nav.classList.remove('dim-area__open');
    hamburger.classList.remove('hamburger__open')
    logo.classList.remove('logo__hidden');
  }
}