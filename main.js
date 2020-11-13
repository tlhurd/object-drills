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

loopObjects();

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

// Object drill 6

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

/*function decode(word){
  for (let i = 0; i < cipher.length; i++){
    if (word.charAt(0) === cipher[i]) {
      console.log(`${word[cipher[i]]}`);
    } else {
      return ' ';
    }
  }
}
*/



/*
function decode(encodedWord) {
  let number = 0;
  let letter = encodedWord.charAt(0);
  for (const property in cipher) {
    if (letter === `${property}`) {
      number = `${cipher[property]}`;
    }
  }
  let encodedLetter = encodedWord.charAt(number);
  if (number === 0) {
    return ' ';
  } else {
    return encodedLetter;
  }
}

decode('twelve');

function decodeWord(string){
  let check = string.split(' ');
  let array = [];
  for (let i = 0; i < check.length; i++){
    array.push(check[i]);
  }
  for (let a = 0; a < array.length; a ++){
    console.log(decode(array[a]));
  }
}

decodeWord('eat my shorts')
*/

function decode(encodedWord){
  let letter = encodedWord.charAt(0);
  let number = 0;
  for (const key in cipher) {
    if (letter === `${key}`) {
      number = `${cipher[key]}`;
    }
  }
  let encodedLetter = `${encodedWord.charAt(number - 1)}`;
  if (number === 0) {
    return ' ';
  } else {
    return encodedLetter;
  }
}

function decodeWord(string) {
  let check = string.split(' ');
  let array = [];
  for (let i = 0; i < check.length; i++){
    array.push(check[i]);
  }
  for (let a = 0; a < array.length; a ++){
    console.log(decode(array[a]));
  }
}
decodeWord('ate breath crate death');

// Object drill 7

function createCharacter(name, nickname, race, origin, weapon, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    weapon,
    attack,
    defense,
    describe: function() {
      console.log(`${name} is a ${race} from ${origin} who uses ${weapon}.`);
    },
    evaluateFight: function(character){
      let x = character.defense - this.attack;
      if (character.defense > this.attack){
        x = 0;
      }
      if (x < 0) {
        x *= -1;
      }

      let y = this.defense - character.attack;
      if (this.defense > character.attack){
        y = 0;
      }
      if (y < 0) {
        y *= -1;
      }

      console.log(`"Your opponent takes ${x} damage and you receive ${y} damage"`);
    }
  };
}

// character array

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'Sting and Barrow Blade', 3,2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'a Bow and Arrow', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 6, 8)
];

// Find Aragorn

let found = characters.find(function (human) {
  return human.nickname === 'aragorn';
});

found.describe();


// Hobbit filter

let hobbits = characters.filter(function (character) {
  return character.race === 'Hobbit';
});

console.log(hobbits);

// Attack filter

let attack = characters.filter(function (fighter) {
  return fighter.attack > 5;
});

console.log(attack);

