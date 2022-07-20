const mongoose = require('mongoose')

const coursSchema = new mongoose.Schema({
    title_cours: { type:String,required:true},
    frais_Cours: { type:String,required:true},
    dure_PayCours: { type:String,required:true},
    description: { type:String,required:true},
    date_Create: { type:Date,required:true},
})

let Cours = mongoose.model('Cours',coursSchema,'Cours');

module.exports = Cours