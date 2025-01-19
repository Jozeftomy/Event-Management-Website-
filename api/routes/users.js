var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/eventmanagement')
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
/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find() .then((users) => {
      res.json(users); 
    })
    .catch((err) => {
      res.status(500).send('Error getting users list'); 
    });
});
/* GET users detials */
router.get('/details', function(req, res, next) {

  let token = req.headers.authorization;
  token = token.split(' ')[1]; 
  const decodedToken = jwt.decode(token, 'PASSWORD');

  userModel.findById(decodedToken.user._id) .then((user) => {
      res.json({message:"user details", data: user}); 
    })
    .catch((err) => {
      res.status(500).send({message : "Error getting user details", data: null}); 
    });
});

/* signup users */
router.post('/signup', function(req, res, next) {
 userModel.create(req.body).then((newUser) => {
  res.send("Registered");
 }) .catch((err) => {
  res.send("error"); 
});
});

/* login users */
router.post('/login', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  userModel.findOne({email : email, password : password}).then((user) => {
   if (user == null){
      res.send({message:"Invalid email or password", data: null});
   }else{
   
    const token = jwt.sign({ user: user },'PASSWORD'); // jwt token

    res.send({message:"Login Sucess", data: token});
   }
  }) .catch((err) => {
   res.send({message : "Error logging in"}); 
 });
 });

/* update users */
router.patch('/update', function (req, res) {
  let id = req.body.id 
  userModel.findByIdAndUpdate(id, { name: req.body.name,phone: req.body.phone }).then(() => {
      res.send('Success');
    })
    .catch((err) => {
      res.send('Error');
    });
});
/* change password */
router.patch('/change-password', function (req, res) { 
let id = req.body.id || req.query.id;
  userModel.findById(id).updateOne({password: req.body.password}).then(() => {
      res.send('Success');
    }).catch((err) => {
      res.send('Error');  
    });
  });
  /* delete */
router.delete('/delete', function (req, res) {  
let id = req.query.id;
  userModel.findByIdAndDelete(id).then(() => {
      res.send('User deleted');
    }).catch((err) => {
      res.send('Error'); 
    });
  });
module.exports = router;
