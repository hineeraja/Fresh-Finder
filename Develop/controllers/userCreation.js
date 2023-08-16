const bcrypt = require('bcrypt');
const { createUser } = require("./userController.js")
const User = require("../models/user.js")

const newUser = {
    UserName: 'FreshEater998',
    Email: 'john@example.com',
    Password: 'hashed_password', //hash password before entering into DB
    Address: '123 North St',
    FirstName: 'John',
    LastName: 'Doe',
    City: 'Example City',
    Province: 'Example Province',
    EmailVerified: false,
};

bcrypt.genSalt(10, (err,salt) => {
    if (err) throw err;

    bcrypt.hash(newUser.Password, salt, async (err, hash) => {
      if (err) throw err;

    newUser.Password = hash;

    try {
      const user = await createUser(newUser);
      console.log('New user created:', user);
    } catch (error) {
      console.error('Invalid information provided:', error);
    }
  });
});

