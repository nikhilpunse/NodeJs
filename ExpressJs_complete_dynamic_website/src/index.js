const express = require('express');
const path = require('path');
const hbs = require('hbs');

const staicPath = path.join(__dirname,'../public/js')
const partialPath = path.join(__dirname,'../template/partials');
const viewsPath = path.join(__dirname,'../template/views')
// console.log(viewsPath);

const app = express();
const port = process.env.PORT || 8000;

//linking external local javascript file
app.use('/js',express.static(staicPath));

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404_error');
})

app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
});