const express = require('express')
const cors = require('cors')
const database = require('./config/database')
const adminroutes = require('./routes/Admin-routes')
const stud_routing = require('./routes/Student-routes')
const prof_routing = require('./routes/Teacher-routes')
const staffs_routing = require('./routes/Staffs-routes')
const cours_routing = require('./routes/Cours-routes')
const classes_routing = require('./routes/Classes-routes')
const frais_routing = require('./routes/Frais-routes')
var address = require('address');
const { mac } = require('address')


const Mac = address.mac(function (err, addr) {
  return addr
});


console.log(Mac)

const app = express()
app.use(express.json())
app.use(cors())
const port = 9000


app.use('/',adminroutes)
app.use('/',stud_routing)
app.use('/',prof_routing)
app.use('/',staffs_routing)
app.use('/',cours_routing)
app.use('/',classes_routing)
app.use('/',frais_routing)


/* ======== Crud part three Delete Student ============= */

app.get('/Delete/:id',async (req,res)=>{

    const  id =req.params.id
    await Student.findByIdAndRemove(id).exec();
    res.send("deleted")
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
