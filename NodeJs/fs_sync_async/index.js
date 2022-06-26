// const fs = require('fs');

// To create file 
// fs.writeFileSync('read.txt', 'WelCome to techSolution')

// fs.appendFileSync('read.txt', ' how are you?');

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
// console.log(buf_data.toString());

// To rename file

// fs.renameSync('read.txt','readWrite.txt');


// CRUD operation in Node.js syncronus
// fs.writeFileSync('bio.txt',' this is new file.');
// fs.appendFileSync('bio.txt',' New line added.');
// const data = fs.readFileSync('mybio.txt','utf-8');
// console.log(data);
// fs.renameSync('bio.txt','mybio.txt');
// fs.mkdirSync('newCrud');
// fs.rmdirSync('newCrud');
// fs.unlinkSync('mybio.txt');


// asyncronouse file handling in node.js
const fs = require('fs');

// fs.writeFile('read.txt','Welcome to the TechSolution.',(err)=>{
//     console.log('file created successfully');
// });

// const data = fs.readFile('read.txt','UTF-8',(err,data)=>{
//     console.log(data);
// });

// fs.appendFile('read.txt',' line added successfully',(err)=>{
//     console.log('line appended.');
// });

// fs.rename('read.txt','readwrite.txt',(err)=>{
//     console.log('file renamed.');
// })

fs.unlink('readwrite.txt',(err)=>{
    console.log('file deleted.');
})