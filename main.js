"use strict";

// Initializing the owl carrousel header

$(".header__slider").owlCarousel({
  stagePadding: 30,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});
// Initializing the owl carrousel news blog

// $(".news__slide").owlCarousel({
//   loop: true,
//   margin: 20,
//   nav: false,
//   responsive: {
//     0: {
//       items: 2,
//     },
//     500: {
//       items: 2,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

$(".news__slide").owlCarousel({
  loop: true,
  responsiveClass: true,
  mergeFit: 10,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
    },
  },
});

//Initialization of the counter counter
const countdown = () => {
  //!Define the final date

  const date = new Date("AUG 27, 2022 00:00:00").getTime();

  const now = new Date().getTime();
  const gap = date - now;

  //!Define the variables

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //!Calculation of the time

  const textday = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);

  //!iNSERT values on DOM elements

  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".minute").innerText = textminute;
  document.querySelector(".second").innerText = textsecond;
};

setInterval(countdown, 1000);
