'use strict';

const loaf = {
  flour: 300,
  water: 210,
  
  hydration: function() {
    return (loaf.water/loaf.flour) * 100;
  }
};

console.log(loaf.hydration());

const newObj = {
  foo: 'bloo',
  bar: 'blar',
  fum: 'blum',
  quux: 'bluux',
  spam: 'blam'
};


for (const property in newObj) {
  console.log(`${property}: ${newObj[property]}`);
}

const arr = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

console.log(arr.meals[3]);

const one = {

}
const two = {
  
}
const three =
const four =
const five =