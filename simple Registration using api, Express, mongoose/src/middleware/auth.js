const jwt = require("jsonwebtoken");
const  User = require('../models/student');

//authentication cookie
const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwtoken;
        const dbToken = await User.findOne({token : token});
        if(dbToken){
            console.log('token found');
        }else{
            console.log('token not found');
            res.status(200).redirect('/index.html');
            res.clearCookie('jwtoken');
        }
        next();
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = auth;