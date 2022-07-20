const database = require('../config/database')
const Student = require('../models/student')
const Teacher = require('../models/teacher')

let student1 = new Student({
    first_name: 'Ammar Mekki',
    last_name: 'Toumi',
    parent_name: 'Taher and zahiya',
    birth_date: '03/04/2000',
    birth_place: 'setif,algerie',
    sex: 'Male',
    tel_stud: '0699977753',
    tel_part: '0661643246',
    level_aca: 'master 1',
    Cours: 'Programing with C#',
    mental_prob: 'none',
    physic_prob: 'none',
    date_first: Date.now(),    


})

student1.save((err)=>{
    if(!err){
        console.log('Student was added')
    }else{
        console.log(err)
    }
})

let teacher1 = new Teacher({
    code_qr: 'localhost:3000/id?1',
    first_name: 'Ammar Mekki',
    last_name: 'Toumi',
    birth_date: '03/04/2000',
    birth_place: 'setif,algerie',
    sex: 'Male',
    tel_tea: '0699977753',
    level_aca: 'master 1',
    Cours_total: 'Programing with C#',
    mental_prob: 'none',
    physic_prob: 'none',
    date_first: Date.now(),    


})

teacher1.save((err)=>{
    if(!err){
        console.log('Teacher was added')
    }else{
        console.log(err)
    }
})