const express=require("express")
const router = express.Router()
const Frais = require('../models/finance')
var address = require('address');
const { mac } = require('address')

/* ======== Crud part one Create New Student ============= */
 
router.post('/createFrais',async (req,res)=>{
  })
  
  
/* ======== Crud part one Read Student Information ============= */

router.get('/readFrais',async (req,res)=>{
      Frais.find({},(err,result)=>{
      if (err){
        res.send(err)
      }
      res.send(result)
    })
  })
  
    

module.exports =router