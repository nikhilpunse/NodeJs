const fs = require('fs');
const obj = {
    name : 'Nikhil Punse',
    age : 30,
    education :'MSC',
    location : 'Yavatmal'
}

const jsonData = JSON.stringify(obj);
fs.writeFile('data.json',jsonData,(err)=>{
    console.log('file created successfully.')
})


fs.readFile('data.json','UTF-8',(Err,data)=>{
     console.log(JSON.parse(data));
})
