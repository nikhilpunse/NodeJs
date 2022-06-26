const http = require('http');
 
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('<h1>Hello from server home side.</h1>');
    }else if(req.url == '/contact'){
        res.end('Hello from server contact side.');
    }else if(req.url == '/service'){
        res.end('Hello from server service side.');
    }else if(req.url == '/about'){
        res.end('Hello from server about side.');
    }else {
        res.writeHead(404,{'Content-type' : 'text/html'});
        res.end('<h1>404 Error page. page not found.</h1>')
    }
    
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('server is listening at port 8000.');
})