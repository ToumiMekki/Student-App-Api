const express=require("express")
const router = express.Router()
const Classes = require('../models/classes')

/* ======== Crud part one Create New Student ============= */
 
router.post('/createClasses',async (req,res)=>{


  const Class_name =req.body.Class_name
  const Max_number =req.body.Max_number
  const Type_class =req.body.Type_class
  const Note =req.body.Note

const new_Classes = new Classes({
  Class_name: Class_name,
  Max_number: Max_number,
  Type_class: Type_class,
  Note: Note,
  date_Create: Date.now()
})
await new_Classes.save((err)=>{
  if(!err){
      console.log('Classes '+Class_name+' was added')
  }else{
      console.log(err)
  }
})
})



  
/* ======== Crud part one Read Student Information ============= */

router.get('/readClasses',async (req,res)=>{
  Classes.find({},(err,result)=>{
  if (err){
    res.send(err)
  }
  res.send(result)
})
})

  /* ======== Delete Cours Information ============= */
  router.delete('/deleteClasses/:id', async (req, res) => {
    const id = req.params.id
    await Classes.findByIdAndRemove(id).exec()
  });  
  
    

module.exports =router