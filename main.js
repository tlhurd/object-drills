'use strict';

const loaf = {
  flour: 300,
  water: 210,
  
  hydration: function() {
    return (loaf.water/loaf.flour) * 100;
  }
};

console.log(loaf.hydration());
