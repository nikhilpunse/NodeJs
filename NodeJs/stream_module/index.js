const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res)=>{
    // 1st way of streaming...
    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rstream.on('end',(chunkdata)=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end('file not found');
    // })


    // 2nd way of streaming...
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

})


server.listen(8000,'127.0.0.1', (err)=>{
    console.log(`listening to port no 8000.`)
});