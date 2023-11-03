const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomEmail, getRandomThought } = require('./data');
//  , getRandomThought , Thoughts 
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  // let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
  // if (thoughtCheck.length) {
  //   await connection.dropCollection('thoughts')
  //   console.log('Deleted thoughts');    
  // }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('Deleted users');
  }

  let emailCheck = await connection.db.listCollections({ name: 'emails' }).toArray();
  if (emailCheck.length) {
    await connection.dropCollection('emails');
    console.log('Deleted users');
  }

  const users = [];
  // const thoughts = [];

  for (let i = 0; i < 10; i++) {
    const username = getRandomName();
    const email = getRandomEmail();
    users.push({
      username,
      email,
      thoughts: getRandomThought(),
    })
    console.log('users pushed');
  };

  // for (let i = 0; i < 10; i++) {
  //   thoughts.push(getRandomThought());
  //   console.log(thoughts);
  // };

  await User.collection.insertMany(users);
  console.log('Inserted into users');
  // await Thoughts.collection.insertMany(thoughts);
  // console.log('Inserted into thoughts');


  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  // console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
