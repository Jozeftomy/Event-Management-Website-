//importing packages
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EventmanagementModel = require("./models/EventManagement")

//use the packages 
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/eventmanagement')
  .then(() => console.log('db Connected!'));

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const userSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });  

app.post ('register',(req,res)=>{
    EventmanagementModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is running")
})