const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Address Schema
const addressSchema = new Schema({
    address: { type: String , required : true }
})

//User Schema
const userSchema = new Schema({
    name:{ type:String, required:true },
    addresses:[addressSchema]  // one-to-many realtionship
})


//Create Modles
const user = mongoose.model('User',userSchema)

module.exports = user