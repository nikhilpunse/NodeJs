const express = require('express');
require('./db/conn');
const Student = require('./models/students');
const validator = require('validator');
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.post('/students', async (req,res)=>{
    try {
        console.log(req.body);
        const user = new Student(req.body);
    
        //save document in db using promises
    //     user.save().then(()=>{
    //         res.status(201).send(user);
    //     }).catch((e)=>{
    //         res.status(400).send(e);
    //     })
    
      //save document in db using async await
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (error) {
        console.log(error);
    }
})

//geting document from db as api
app.get('/students', async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e){
        res.send(e);
    }
})   

//deletting document from db
app.delete('/students/:id', async (req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send();
    }
    
})

//updating document in db using id
app.patch('/students/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
        res.status(200).send(updateStudent);
        
    } catch (error) {
        res.status(404).send(error);
    }
    

})

app.listen(port,()=>console.log(`server started at port no ${port}.`))