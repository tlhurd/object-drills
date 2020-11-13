'use strict';

// Object drill 1

const loaf = {
  flour: 300,
  water: 210,
  
  hydration: function() {
    return (loaf.water/loaf.flour) * 100;
  }
};

 console.log(loaf.hydration());

// Object drill 2

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

// Object drill 3

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

// Object drill 4 & 5

const one = {
  name: 'Harry Potter',
  jobTitle: 'Hero-Wizard',
  boss: 'Final Pam'
};
const two = {
  name: 'benjaminButton',
  jobTitle: 'oldMan',
  boss: 'Final Pam'
};
const three = {
  name: 'Mr.Nobody',
  jobTitle: 'Killjoy',
  boss: 'Final Pam'
};
const four = {
  name: 'Grandpa Piss',
  jobTitle: 'Emperor',
  boss: 'Final Pam'
};
const five = {
  name: 'Final Pam',
  jobTitle: 'Goddess',
  
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

// loopObjects();

function loopAgain() {
  for (let i = 0; i < array.length; i ++){
    if (array[i].boss) {
      console.log(`${array[i].jobTitle} ${array[i].name} reports to ${array[i].boss}`);
    } else {
      console.log(`${array[i].jobTitle} ${array[i].name} doesn't report to anybody.`);
    }
  }
}

loopAgain();
