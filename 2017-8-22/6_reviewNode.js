const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
  // console.log(req.url)
  switch (req.url) {
    case '/1_nodejs.html':
      fs.readFile('1_nodejs.html',(error,data)=>{
        res.write(data);
        res.end();
      })
      break;
    case '/user':
      res.write('{"name":"hanying"}');
      res.end();
    break;
    default:
      res.write('亲,你找的页面真没有---404');
      res.end();
    break;
  }
  // console.log(123);
  
}).listen(90);