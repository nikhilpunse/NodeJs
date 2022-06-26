const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>Welcome to the Home Page.</h1>');
})
app.get('/about',(req,res)=>{
    res.send('Wlocome to the About page.')
})
app.get('/contact',(req,res)=>{
    res.status(200).send('welcome to the contact page.')
})
app.get('/temp',(req,res)=>{
    res.send('This is Live Temperature page.')
})

app.listen(8000,()=>{
    console.log('listening to port 8000');
})