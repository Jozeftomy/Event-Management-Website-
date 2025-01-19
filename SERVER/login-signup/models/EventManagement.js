const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: String,
    email : String,
    password: String
})
const EventmanagementModel = mongoose.model("users",EventmanagementSchema )
module.exports = EventmanagementModel