const express=require("express")
const router = express.Router()
const Student = require('../models/student')
const path = require('path')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'../Uploads/student_image')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }

})
const upload = multer({ storage:storage})



/* ======== Create New Student ============= */
 
router.post('/createStudent',upload.single("studentImage"),async (req,res)=>{
    const StudentImage = req.body.studentImage
    const First_name = req.body.first_name
    const Last_name = req.body.last_name
    const Parent_name = req.body.parent_name
    const Birth_date = req.body.birth_date
    const Birth_place = req.body.birth_place
    const Email = req.body.email
    const Tel_stud = req.body.tel_stud
    const Tel_part = req.body.tel_part
    const Level_aca = req.body.level_aca
    const Cours = req.body.cours
    const Mental_prob = req.body.mental_prob
    const Physic_prob = req.body.physic_prob

    const new_student = new Student({
      studentImage:StudentImage,
      first_name: First_name,
      last_name: Last_name,
      parent_name: Parent_name,
      birth_date: Birth_date,
      birth_place: Birth_place,
      email: Email,
      tel_stud: Tel_stud,
      tel_part: Tel_part,
      level_aca: Level_aca,
      Cours: Cours,
      mental_prob: Mental_prob,
      physic_prob: Physic_prob,
      date_first: Date.now(),
    });
  
    await new_student.save((err)=>{
      if(!err){
          console.log('Student was added')
      }else{
          console.log(err)
      }
  })
  })
    
/* ======== Read Student Information ============= */

router.get('/readStudent',async (req,res)=>{
    Student.find({},(err,result)=>{
      if (err){
        res.send(err)
      }
      res.send(result)
    })
  })
  
/* ======== Delete Student Information ============= */
router.delete('/deleteStudents/:id', async (req, res) => {
    const id = req.params.id
    await Student.findByIdAndRemove(id).exec()
});  

/* ======== AddStudent_image Information ============= */

router.post("/upload",upload.single('avatar'),(req,res)=>{
  res.send("image uploaded")
})

module.exports =router