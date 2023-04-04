'use strict';

/**
 * fetch
 */

const btcPrice = document.querySelector('#btc-price');
const ethPrice = document.querySelector('#eth-price');
const tetherPrice = document.querySelector('#tether-price');
const bnbPrice = document.querySelector('#bnb-price');
const solanaPrice = document.querySelector('#solana-price');
const xrpPrice = document.querySelector('#xrp-price');
const cardanoPrice = document.querySelector('#cardano-price');
const avalanchePrice = document.querySelector('#avalanche-price');



async function getData() {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const Mydata = await response.json();
    console.log(Mydata);
   
    btcPrice.textContent = `$ ${Math.round(Mydata.data[0].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    ethPrice.textContent = `$ ${Math.round(Mydata.data[1].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    tetherPrice.textContent =`$ ${Math.round(Mydata.data[2].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    bnbPrice.textContent = `$ ${Math.round(Mydata.data[3].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    solanaPrice.textContent = `$ ${Math.round(Mydata.data[9].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    xrpPrice.textContent = `$ ${Math.round(Mydata.data[5].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    cardanoPrice.textContent = `$ ${Mydata.data[6].priceUsd.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    avalanchePrice.textContent =`$ ${Math.round(Mydata.data[15].priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}
getData()

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

