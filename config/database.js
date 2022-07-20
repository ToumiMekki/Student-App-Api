const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/School_app',(err)=> {
    if (err){
        console.log(err)
    }else{
        console.log('Connected seccesfuly to Database')
    }
});
