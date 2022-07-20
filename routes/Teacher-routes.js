const express=require("express")
const router = express.Router()
const Teacher = require('../models/teacher')

/* ======== Create New Student ============= */
 
router.post('/createTeacher',async (req,res)=>{
  const First_name = req.body.first_name
  const Last_name = req.body.last_name
  const Birth_date = req.body.birth_date
  const Birth_place = req.body.birth_place
  const Gender = req.body.gender
  const Email = req.body.email_tea
  const Tel_tea = req.body.tel_tea
  const Level_aca = req.body.level_aca
  const Salary_Prof = req.body.salary_Prof
  const Mental_prob = req.body.mental_prob
  const Physic_prob = req.body.physic_prob
  const new_Teacher = new Teacher({
    first_name:First_name,
    last_name:Last_name,
    salary_Prof:Salary_Prof,
    birth_date:Birth_date,
    birth_place:Birth_place,
    gender:Gender,
    email_tea:Email,
    tel_tea:Tel_tea,
    level_aca:Level_aca,
    mental_prob:Mental_prob,
    physic_prob:Physic_prob,
    date:Date.now(),
  });

  await new_Teacher.save((err)=>{
    if(!err){
        console.log('Teacher was added')
    }else{
        console.log(err)
    }
})
})
  
/* ======== Read Student Information ============= */

router.get('/readTeacher',async (req,res)=>{
  Teacher.find({},(err,result)=>{
    if (err){
      res.send(err)
    }
    res.send(result)
  })
})

/* ======== Delete Student Information ============= */
router.delete('/deleteTeachers/:id', async (req, res) => {
  const id = req.params.id
  await Teacher.findByIdAndRemove(id).exec()
});  

    

module.exports =router