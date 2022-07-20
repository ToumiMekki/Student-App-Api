const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: { type:String,required:true},
    password: { type:String,required:true},
    Mac_address: { type:String,required:true},
})

let Admin = mongoose.model('Admin',adminSchema,'Admin');

module.exports = Admin