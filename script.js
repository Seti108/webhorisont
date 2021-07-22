'use strict';

// SELECTORS

const mobileMenuIcon = document.querySelector('.mobile-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('#icon-close-menu');

console.log(closeMobileMenu);

// MOBILE MENU

let menuToggle = false;

mobileMenuIcon.addEventListener('click', function () {
  if (menuToggle === false) {
    mobileMenu.style.display = 'block';
    menuToggle = true;
  } else {
    mobileMenu.style.display = 'none';
    menuToggle = false;
  }
});

closeMobileMenu.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
  menuToggle = false;
});
