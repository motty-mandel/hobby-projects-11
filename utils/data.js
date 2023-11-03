const names = [
'Matt',
'Gold',
'Moses',
'Silverstein',
'Jake',
'Waller',
'Dove',
'Rosenthal',
'David',
'Schwartz',
];

const thoughts = [
'I thought I can fly!',
'I thought that you are stupid!',
'And I was right!',
'And so are you!',
'Let us go to the store together',
'I like trains!',
'I like the song Country Roads Take Me Home!',
'Do you think dogs go to heaven?',
'I like to think so!',
'What do you think is going on inside his head?'
];

const emails = [
  'matt66@gmail.com',
  'jake98@gmail.com',
  'dove10@gmail.com',
  'davidAndGoliath@gmail.com',
  'meAndMoses@gmail.com',
  'anotherMatt@gmail.com',
  'twoTimesJake@gmail.com',
  'areWeThereYet@gmail.com',
  'noWeAreNot@gmail.com',
  'iAmTired@gmail.com'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random name
const getRandomName = () => getRandomArrItem(names);
// Gets a random thought
const getRandomThought = () => getRandomArrItem(thoughts);
// Gets a random email
const getRandomEmail = () => getRandomArrItem(emails);



// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought, getRandomEmail };
