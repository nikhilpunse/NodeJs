const mongoose =  require('mongoose');

// creating new connection and creating db
mongoose.connect('mongodb://localhost:27017/students-api')
.then(()=>console.log('connection succesfull...'))
.catch((err)=>console.log(console.log('no connection.')));