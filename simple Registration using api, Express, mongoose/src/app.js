const express = require('express');
require("./db/conn");
const User = require('./models/student');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const auth = require("./middleware/auth");
const app = express();

const { urlencoded } = require('express');
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.use(express.json());
app.use(urlencoded({extended : false}));
app.use(cookieParser());

//Show Api Data 
app.get("/api",auth, async (req,res)=>{
    const userData = await User.find();
    res.send(userData);
})

//Logout Process
app.get("/logout",(req,res)=>{
    res.clearCookie('jwtoken');
    res.status(200).redirect('/');
})

//login process
app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email;
        const userData = await User.find({email : email})
        .exec()
        .then((user)=>{
            if(user.lenth<1){
                return res.status(401).json({ msg : 'user not exist'})
            }
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(!result){
                    return res.status(401).json({ msg : 'password matching fail'})
                }
                if(result){
                    const token = jwt.sign({
                        fullname : user[0].fullname,
                        email : user[0].email,
                        phone : user[0].phone
                    },
                    'this is dumy text',
                    {
                        expiresIn : "24h"
                    });

                    // res.status(200).json({
                    //     fullname : user[0].fullname,
                    //     email : user[0].email,
                    //     phone : user[0].phone,
                    //     token : token
                    // })
                    res.cookie("jwtoken",token,{
                        expires: new Date(Date.now() + 50000),
                        httpOnly: true
                    });

                    // update token in collection
                    const updateDocument = async (email)=>{
                        try {
                            const result = await User.
                            updateOne({email}, {
                                $set : {token : token}
                            },
                            {new : true, useFindAndModify : false});
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    updateDocument(req.body.email);    
                    
                    // res.status(200).send(`sucessully login token is ${token}`);
                    res.status(200).redirect('/secret.html');
                }
            })
        })
        
        // console.log(userData);
    }
    catch(e){
        res.status(401).send("invalide login credential.")
    }
});

//registation process
app.post('/register',  (req,res)=>{
    try{
         // confirming password
        if(req.body.password === req.body.cpassword){
            
            bcrypt.hash(req.body.password, 10, async (err, hash)=> {
                
                if(err){
                    res.status(500).send(err);
                }else{

                    const newUser = await new User({
                        fullname : req.body.fullname,
                        email : req.body.email,
                        phone : req.body.phone,
                        password : hash
                    });
                    newUser.save().then(()=>res.status(200).send("data sent."))
                    .catch((e)=>res.status(400).send(e));
                }
            });
        }else{
            res.send('password not matched, Enter Carefully.')
        }
    }catch(e){
        res.status(400).send(e);
    }
})


app.listen(port, ()=>console.log(`listening to port no ${port}`));