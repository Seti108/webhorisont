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

// Priser & Paket

const termsBtn = document.querySelectorAll('#bill-terms');
const termsPopup = document.querySelectorAll('.terms');
const bundlesSection = document.querySelector('.bundles');
// Open/close terms
let termsToggle = false;
termsBtn.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    if (!termsToggle) {
      termsPopup[i].style.display = 'block';
      termsToggle = true;
      return;
    }
    if (termsToggle) {
      termsPopup.forEach((popup) => {
        popup.style.display = 'none';
        termsToggle = false;
      });
    }
  });
});

// bundlesSection.addEventListener('click', function (e) {
//   if (termsToggle == true) {
//     console.log('Clicking');
//     termsPopup.forEach((popup) => {
//       popup.style.display = 'none';
//       termsToggle = false;
//     });
//   }
// });
