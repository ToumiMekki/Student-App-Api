const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentImage:{type:String,required:true},
    statut_student:{type:String,required:false},
    first_name: { type:String,required:true},
    last_name: { type:String,required:true},
    parent_name: { type:String,required:true},
    birth_date: { type:String,required:true},
    birth_place: { type:String,required:true},
    email: { type:String,required:true},
    tel_stud: { type:String,required:true},
    tel_part: { type:String,required:true},
    level_aca: { type:String,required:true},
    Cours: { type:String,required:true},
    mental_prob: { type:String,required:true},
    physic_prob: { type:String,required:true},
    date_Create: { type:Date,required:true},
})

let Stud = mongoose.model('Stud',studentSchema,'Students');

module.exports = Stud