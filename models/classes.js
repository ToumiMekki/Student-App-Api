const mongoose = require('mongoose')

const classesSchema = new mongoose.Schema({
    Class_name: { type:String,required:true},
    Max_number: { type:String,required:true},
    Type_class: { type:String,required:true},
    Note: { type:String,required:true},
    date_Create: { type:Date,required:true},
})

let Classes = mongoose.model('Classes',classesSchema,'Classes');

module.exports = Classes