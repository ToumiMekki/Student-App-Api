const express=require("express")
const router = express.Router()
const Cours = require('../models/cours')

/* ======== Crud part one Create New Student ============= */
 
router.post('/createCours',async (req,res)=>{


    const Title_cours =req.body.title_cours
    const Frais_cours =req.body.frais_Cours
    const Dure_PayCours =req.body.dure_PayCours
    const Description =req.body.description

  const new_Cours = new Cours({
    title_cours: Title_cours,
    frais_Cours: Frais_cours,
    dure_PayCours: Dure_PayCours,
    description: Description,
    date_Create: Date.now()
  })
  await new_Cours.save((err)=>{
    if(!err){
        console.log('Cours '+Title_cours+' was added')
    }else{
        console.log(err)
    }
})
})
  
  
/* ======== Crud part one Read Student Information ============= */

router.get('/readCours',async (req,res)=>{
      Cours.find({},(err,result)=>{
      if (err){
        res.send(err)
      }
      res.send(result)
    })
  })
  /* ======== Delete Cours Information ============= */
router.delete('/deleteCours/:id', async (req, res) => {
  const id = req.params.id
  await Cours.findByIdAndRemove(id).exec()
});  

    

module.exports =router