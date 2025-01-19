const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./routes/users'); // Import routes

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventmanagement')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Set up routes
app.use('/users', usersRouter);

// Export app to be used in bin/www
module.exports = app;
