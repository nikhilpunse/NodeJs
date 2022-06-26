const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname,'../public')
console.log(staticPath);

// Build middleware for static website
// app.use(express.static(staticPath));

// setting view engine for dynamic website
app.set('view engine','hbs');

//Routing for dynamic page
app.get('/',(req,res)=>{
    res.render('index',{ obj : 'Yehhh.....'});
})

//Normal Routing
app.get('/', (req,res)=>{
    res.send('Hello world, from express side.')
});

app.get('/about',(req,res)=>{
    res.send('hello from the About side using express.')
})

app.listen(8000, ()=>{
    console.log('listing to port no 8000.')
})