const names = [
'Motty',
'Moishy',
'Yanky',
'Duvi',
'David',
];

const thoughts = [
'I thought I can fly!',
'I thought That you are stupid!',
'And I was right!',
'And so are you!',
'Let us go to the store together',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomThought = (arr) => 
  `${getRandomArrItem(thoughts)}`;


// Export the functions for use in seed.js
module.exports = { getRandomThought};
module.exports = { getRandomName};
