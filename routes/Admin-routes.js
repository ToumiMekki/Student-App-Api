const express = require('express')
const router = express.Router()
const admin = require('../models/admin')
var address = require('address');
const { mac } = require('address')


// register user view 

router.get('/register',(req,res)=>{
    res.json('register ....')
})

// profile user view 

router.get('/profile',(req,res)=>{
    res.json('profile ....')
})

/* ======== Crud part five Login Admin ============= */

router.get('/Login',async (req,res)=>{

    const Mac = address.mac(function (err, addr) {
       return addr
     });
     
     admin.find({},(err,result)=>{
       if (err){
         res.send(err)
       }
       res.send(result)
     })
   })
  
module.exports =router