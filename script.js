'use strict';
// PARCAL IMAGE IMPORT

import images from './Images/*.png';

// MENU SELCTORS

const mobileMenuIcon = document.querySelector('.mobile-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('#icon-close-menu');

const navElement = document.querySelector('nav');
const navBar = navElement.style.height;
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

// Lazy Load Selectors

const header = document.querySelector('header');
const amicusSvg = document.querySelector('.amicus-svg');
const crSvg = document.querySelector('.cr-bygg-svg');
const danakoshaSvg = document.querySelector('.danakosha-svg');
const newWebsiteHeader = document.querySelector('.new-website-header');
const existingWebsiteHeader = document.querySelector(
  '.existing-website-header'
);

// Lazy load reference images

const observerCallback = function (entries) {
  const [entry] = entries;
  // Lazy load gallery desktop
  if (!entry.isIntersecting && window.location.pathname === '/index.html') {
    // References
    amicusSvg.src = '/amicus-mobile-min.fce5617a.png';
    crSvg.src = '/cr-bygg-mobile-min.b773bf3f.png';
    danakoshaSvg.src = '/danakosha-mobile-min.a9d2dfc6.png';
  }

  if (!entry.isIntersecting && window.location.pathname === '/tjanster.html') {
    // Tjanster images
    newWebsiteHeader.classList.remove('lazy');
    existingWebsiteHeader.classList.remove('lazy');
  }

  if (!entry.isIntersecting && window.location.pathname === '/om-mig.html') {
    // References
    amicusSvg.src = '/amicus-mobile-min.fce5617a.png';
    crSvg.src = '/cr-bygg-mobile-min.b773bf3f.png';
    danakoshaSvg.src = '/danakosha-mobile-min.a9d2dfc6.png';
  }
};

const observerOptions = {
  root: null,
  threshold: 0.9,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(header);

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
    sectionCoords.top + window.pageYOffset - 64
  );
});

existingWebsiteBtn?.addEventListener('click', function (e) {
  const sectionCoords = sectionExistingWebsite.getBoundingClientRect();

  window.scrollTo(
    sectionCoords.left + window.pageXOffset,
    sectionCoords.top + window.pageYOffset - 64
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
