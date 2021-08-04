'use strict';

// SELECTORS

// MENU SELCTORS

const mobileMenuIcon = document.querySelector('.mobile-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('#icon-close-menu');

const navElement = document.querySelector('nav');
const navBar = navElement.style.height;
console.log(navBar);
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

// Tjänster

// Selectors
const newWebsiteBtn = document.querySelector('.btn-new-website');
const existingWebsiteBtn = document.querySelector('.btn-existing-website');

const sectionNewWebsite = document.querySelector('.new-website');
const sectionExistingWebsite = document.querySelector('.existing-website');

// Smooth scroll btns

newWebsiteBtn?.addEventListener('click', function (e) {
  const sectionCoords = sectionNewWebsite.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top + window.pageYOffset
  );
});

existingWebsiteBtn?.addEventListener('click', function (e) {
  const sectionCoords = sectionExistingWebsite.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top + window.pageYOffset
  );
});

// Priser & Paket

// Selectors

//Terms selectors
const termsBtn = document.querySelectorAll('#bill-terms');
const termsPopup = document.querySelectorAll('.terms');
const bundlesSection = document.querySelector('.bundles');

// Smooth scroll selectors
const basBtn = document.querySelector('.btn-bas');
const standardBtn = document.querySelector('.btn-standard');
const plusBtn = document.querySelector('.btn-plus');

const sectionBas = document.querySelector('.bas');
const sectionStandard = document.querySelector('.standard');
const sectionPlus = document.querySelector('.plus');

// Open/close terms
let termsToggle = false;

termsBtn.forEach((btn, i) => {
  btn.addEventListener('click', function (e) {
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

// Clicking on terms popup closes the window

termsPopup.forEach((popup) => {
  popup.addEventListener('click', function (e) {
    if (e.target !== popup) {
      termsPopup.forEach((popup) => {
        popup.style.display = 'none';
        termsToggle = false;
      });
    }
  });
});

// window.addEventListener('click', function (e) {
//   if (e.target !== termsBtn && termsToggle == true) {
//     termsPopup.forEach((popup) => {
//       popup.style.display = 'none';
//       termsToggle = false;
//     });
//   }
// });

// Smooth scroll to bundles

basBtn?.addEventListener('click', function () {
  const sectionCoords = sectionBas.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top - 64 + window.pageYOffset
  );
});

standardBtn?.addEventListener('click', function () {
  const sectionCoords = sectionStandard.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top - 64 + window.pageYOffset
  );
});

basBtn?.addEventListener('click', function () {
  const sectionCoords = sectionBas.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top - 64 + window.pageYOffset
  );
});

plusBtn?.addEventListener('click', function () {
  const sectionCoords = sectionPlus.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top - 64 + window.pageYOffset
  );
});
