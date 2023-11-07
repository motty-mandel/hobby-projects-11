const connection = require('../config/connection');
const { User, Thoughts} = require('../models');
const { getRandomName, getRandomEmail, getRandomThought } = require('./data'); 
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('Deleted users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
    console.log('Deleted thoughts');
  }

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 10; i++) {
    const username = getRandomName();
    const email = getRandomEmail();
    users.push({
      username,
      email,
      thoughts: [],
      friends: [],
    })
  };

  for (let i = 0; i < 10; i++) {
    const thoughtText = getRandomThought();
    thoughts.push({
      thoughtText,
      createdAt: new Date(),
      username: [],
      reactions: [],
    })
  };

  await User.collection.insertMany(users);
  console.log('Inserted into users');
  await Thoughts.collection.insertMany(thoughts);
  console.log('Inserted into thought');


  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
