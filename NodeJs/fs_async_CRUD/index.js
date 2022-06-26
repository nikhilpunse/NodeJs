const fs = require('fs');
// fs.mkdir('async',(err)=>{
//     console.log('folder created.')
// });
// fs.writeFile('async/bio.txt','welcome to the fs module.',(err)=>{
//     console.log('file created.')})

// fs.appendFile('async/bio.txt',' new line appended. ', (err)=>{
//          console.log('appended data.')
//      })

// fs.readFile('async/bio.txt','utf-8',(err,data)=>{
//          console.log(` file read succesfully.here is data :- ${data}`);
//      });

// fs.rename('async/bio.txt','async/mybio.txt',(err)=>{
//          console.log('file renamed.')
//         });

// fs.unlink('async/mybio.txt',(err)=>{
//     console.log('file deleted.')
//    });

fs.rmdir('async',(err)=>{
    console.log('folder deleted.')
   })