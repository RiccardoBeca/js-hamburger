

const apriMenu = document.querySelector(".header-right > a");
const chiudiMenu = document.querySelector(".close");



apriMenu.addEventListener('click', function(){

  const elementHamburgerMenu = document.querySelector('.hamburger-menu');
  elementHamburgerMenu.classList.add("active");

})


chiudiMenu.addEventListener('click', function(){

  const elementHamburgerMenu = document.querySelector('.hamburger-menu');
  elementHamburgerMenu.classList.remove('active');

})
