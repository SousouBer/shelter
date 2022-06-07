// if(document.readyState == 'loading'){
//   document.addEventListener('DOMContentLoaded', ready);
// } else {
//   ready();
// }

// function ready(){
//   const petsSection = document.querySelector('.pets-selection');
//   const petsMain = document.querySelector('.pets-grid');

// const pets = [
//   {
//     "name": "Jennifer",
//     "img": "../../assets/images/pets-jennifer.svg",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/pets-sophia.svg",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/pets-woody.svg",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/pets-scarlet.svg",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/pets-katrine.svg",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/pets-timmy.svg",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/pets-freddie.svg",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/pets-charly.svg",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   }
// ];

// pets.forEach(function(pet){
//   const {name, img, type, breed, desc, age, inoc, diseases, paraites} = pet;
//   const petDiv = `<div class="pets-content" id="${name.toLowerCase()}">
//     <img class="margin-bottom--3rem" src="${img}" alt="${name} photo">
//      <p class="pet-names margin-bottom--4rem">${name}</p>
//        <button class="btn btn-pets">Learn More</button>
//   </div>`
  
//   petsMain.insertAdjacentHTML('afterbegin', petDiv);
//   const petsContent = document.querySelector('.pets-content');
  
//   petsContent.style.position = 'absolute';   
//   petsMain.style.position = 'relative';
// });

// const btnRight = document.querySelector('.btn-right');

// let curSlide = 0;

// // slides.forEach((s, i) => {
// //   s.style.transform = `translateX(${100 * i}%)`;
// // })

// btnRight.addEventListener('click', function(){
//   const slides = document.querySelectorAll('.pets-content');
//   const slidesArray = Array.from(slides);
  
  
//   let randomCard = Math.floor(Math.random() * slidesArray.length);
//   if(curSlide === slidesArray.length - 1){
//     curSlide = 0;
//   } else {
//     curSlide++;
//     // console.log(curSlide);
//   }
//   // console.log(slides[randomCard]);
//   // console.log(Array.from(slides));
  
//   // let randomCard = Math.floor(Math.random() * slides.length);
//   // console.log(slides)
//   slidesArray.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
//     console.log(i)
//   })
//   // console.log(randomCard)
// })


// HAMBURGER MENU

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav-list');
const body = document.querySelector('body');
const logo = document.querySelector('.logo-container');

hamburger.addEventListener('click', function(){
 hamburger.classList.toggle('hamburger__open');
 nav.classList.toggle('dim-area__open');
 logo.classList.toggle('logo__hidden');
 body.classList.toggle('hide-y');
})

body.addEventListener('click', hideHamburger);

function hideHamburger(e){
  if(!e.target.classList.contains('hamburger')){
    nav.classList.remove('dim-area__open');
    hamburger.classList.remove('hamburger__open')
    logo.classList.remove('logo__hidden');
    body.classList.remove('hide-y');
  }
}

const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.svg",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.svg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.svg",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.svg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.svg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.svg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.svg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.svg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];


const petsGrid = document.querySelector('.pets-grid');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');


let current_page = 0;
let rows = screen.width >= 1280 ? 3 : screen.width >= 768 ? 2 : 1; 



function DisplayList(items, wrapper){
  wrapper.innerHTML = '';
  let randomArr = pets.sort(() => Math.random() - 0.5);

    for(let i = 0; i < rows; i++){
      let pet = pets[i];


      const {name, img, type, breed, desc, age, inoc, diseases, paraites} = pet;

      const petDiv = `<div class="pets-content" id="${name.toLowerCase()}">
      <img class="margin-bottom--3rem" src="${img}" alt="${name} photo">
      <p class="pet-names margin-bottom--4rem">${name}</p>
        <button class="btn btn-pets">Learn More</button>
       </div>`

      wrapper.insertAdjacentHTML('afterbegin', petDiv);
    }


  // let start = rows_per_page * page;
  // let end = start + rows_per_page;
  // paginatedItems = items.slice(start, end);

  // for(let i = 0; i < paginatedItems.length; i++){
  //   let currentPet = Math.floor(Math.random() * items.length);

  //   console.log(currentPet)


  //   let pet = items[currentPet];

  //   const {name, img, type, breed, desc, age, inoc, diseases, paraites} = pet;

  //   const petDiv = `<div class="pets-content" id="${name.toLowerCase()}">
  //     <img class="margin-bottom--3rem" src="${img}" alt="${name} photo">
  //     <p class="pet-names margin-bottom--4rem">${name}</p>
  //       <button class="btn btn-pets">Learn More</button>
  //   </div>`

  //    wrapper.insertAdjacentHTML('afterbegin', petDiv);
  //   }

  //   const petContent = document.querySelectorAll('.pets-content');

  //   for(let i = 0; i < paginatedItems.length; i++){
  //     petContent[i].addEventListener('click', function(){
  //     popUp.style.display = 'flex';
  //     popUpDiv.style.display = 'block';
  //     document.body.style.overflowY = 'hidden';
    
  //     console.log('clicked');
  //     })
  //   }
  }


DisplayList(pets, petsGrid);

btnRight.addEventListener('click', () => {
  DisplayList(pets, petsGrid);
});

btnLeft.addEventListener('click', () => {
  DisplayList(pets, petsGrid);
});

// @keyframes append-animate {
// 	from {
// 		transform: scaleY(0);
// 		opacity: 0;
// 	}
// 	to {
// 		transform: scaleY(1);
// 		opacity: 1;
// 	}
// }
