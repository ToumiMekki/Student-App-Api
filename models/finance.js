const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    date_last: { type:Date,required:true},
    date_first: { type:Date,required:true},

});
const expensesSchema = new mongoose.Schema({
    date_last: { type:Date,required:true},
    date_first: { type:Date,required:true},

});
const benefitsSchema = new mongoose.Schema({
    date_last: { type:Date,required:true},
    date_first: { type:Date,required:true},
});

let Income = mongoose.model('Income',incomeSchema,'Income');
module.exports = Income

let Expenses = mongoose.model('Expenses',expensesSchema,'Expenses');
module.exports = Expenses

let Benefits = mongoose.model('Benefits',benefitsSchema,'Benefits');
module.exports = Benefits
