const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const staticPath = path.join(__dirname,'../public/css')
const partialPath = path.join(__dirname,'./partials/')

//importing static css (any) file
app.use(express.static(staticPath));

// setting view engine for dynamic website
app.set('view engine','hbs');

//setting partianls file path
hbs.registerPartials(partialPath);

//Routing for dynamic page
app.get('/',(req,res)=>{
    res.render('index',{ obj : 'Yehhh.....'});
})

app.get('/about',(req,res)=>{
    res.render('about');
})

// 404 Error page
app.get('*',(req,res)=>{
    res.render('404', {
        erorrComment : '404 Error occured.Requisted page does not exist'
    })
})

app.listen(8000, ()=>{
    console.log('listing to port no 8000.')
})