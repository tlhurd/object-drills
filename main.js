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
  name: 'Harry Potter',
  jobTitle: 'Hero-Wizard'
};
const two = {
  name: 'benjaminButton',
  jobTitle: 'oldMan'
};
const three = {
  name: 'Mr.Nobody',
  jobTitle: 'Killjoy'
};
const four = {
  name: 'Grandpa Piss',
  jobTitle: 'Emperor'
};
const five = {
  name: 'Final Pam',
  jobTitle: 'Goddess'
};

const array = [
  one, 
  two,
  three,
  four,
  five
];

function loopObjects(){
  for (let i = 0; i < array.length; i ++){
    for(const value in array[i]) {
      console.log(`${value}: ${array[i][value]}`);
    }
  }
}

loopObjects();