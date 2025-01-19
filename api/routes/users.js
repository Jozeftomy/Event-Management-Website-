var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');  // Keep this line only once

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventmanagement')
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const Schema = mongoose.Schema;
// Define schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phone: String
});
// Define model
const userModel = mongoose.model('users', userSchema);

// GET users listing
router.get('/list', function(req, res, next) {
  userModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).send('Error getting users list');
    });
});

// Register users (POST)
router.post('/add-user', (req, res) => {
  const { name, email, password, phone } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password || !phone) {
    return res.status(400).send('Missing required fields');
  }

  // Create a new user instance with the provided data
  const newUser = new userModel({
    name,
    email,
    password,
    phone,
  });

  // Save the new user to MongoDB
  newUser.save()
    .then((user) => {
      // Generate JWT token for the new user
      const token = jwt.sign({ userId: user._id }, 'PASSWORD'); // jwt token

      // Send the response with the token
      res.status(200).send({ message: 'User added successfully', user, token });
    })
    .catch((error) => {
      res.status(500).send('Error adding user: ' + error);
    });
});

// Login users (POST)
router.post('/login', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  userModel.findOne({ email: email, password: password }).then((user) => {
    if (user == null) {
      res.send({ message: "Invalid email or password", data: null });
    } else {
      const token = jwt.sign({ user: user }, 'PASSWORD'); // jwt token
      res.send({ message: "Login Success", data: token });
    }
  }).catch((err) => {
    res.send({ message: "Error logging in" });
  });
});

module.exports = router;
