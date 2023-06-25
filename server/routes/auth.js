const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserByUsername, createUser } = require('../models/User');
// const { createUser} 

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  try {
    // Check if the user exists
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Create and sign a JWT token
    const token = jwt.sign({ id: user.id }, 'jwt-secret');

    // Send the token in the response
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Registration route
router.post('/register', async (req, res) => {
  const {names, username, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const userId = await createUser(names,username, hashedPassword);
    res.json({message: 'User Registered successfully' , user: req.body});
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
