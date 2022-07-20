const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    code_qr: { type:String,required:true},
    Status: { type:String,required:true},
    first_name: { type:String,required:true},
    last_name: { type:String,required:true},
    birth_date: { type:String,required:true},
    birth_place: { type:String,required:true},
    sex: { type:String,required:true},
    tel_staff: { type:Number,required:true},
    Jobs_title: { type:String,required:true},
    salary_Staff: { type:Number,required:true},
    mental_prob: { type:String,required:true},
    physic_prob: { type:String,required:true},
    date_last: { type:Date,required:true},
    date_first: { type:Date,required:true},
})

let Staff = mongoose.model('Staff',staffSchema,'Team_Staff');

module.exports = Staff