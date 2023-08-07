const http = require('node:http');
const server= http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/"){
        res.writeHead(200,{"Content-Type": "text/html" });
        res.write("<h1>Index Sayfasi</h1>");
    }
    else if(url==="/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>About Sayfasi</h1>");
    }
    else if(url==="/contact"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Contact Sayfasi</h1>");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>404 Sayfa Bulunamadi</h1>");
    }

    res.end();
})

const port =5000;
server.listen(port,()=>{
    console.log(`sunucu ${port} de başlatıldı`);
})