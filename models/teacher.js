const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    
    first_name: { type:String,required:true},
    last_name: { type:String,required:true},
    birth_date: { type:String,required:true},
    birth_place: { type:String,required:true},
    gender: { type:String,required:true},
    email_tea: { type:String,required:true},
    tel_tea: { type:Number,required:true},
    level_aca: { type:String,required:true},
    salary_Prof: { type:Number,required:true},
    mental_prob: { type:String,required:true},
    physic_prob: { type:String,required:true},
    date: { type:Date,required:true},

})

let Teacher = mongoose.model('Teacher',teacherSchema,'Teacher');

module.exports = Teacher