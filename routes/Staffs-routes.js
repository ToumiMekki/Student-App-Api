const express=require("express")
const router = express.Router()
const Staffs = require('../models/staff')
var address = require('address');
const { mac } = require('address')

/* ======== Crud part one Create New Student ============= */
 
router.post('/createStaffs',async (req,res)=>{
  
})
  
  
/* ======== Crud part one Read Student Information ============= */

router.get('/readStaffs',async (req,res)=>{
      Staffs.find({},(err,result)=>{
      if (err){
        res.send(err)
      }
      res.send(result)
    })
  })
  
    

module.exports =router