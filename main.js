"use strict";

// Initializing the owl carrousel
$(".owl-carousel").owlCarousel({
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
