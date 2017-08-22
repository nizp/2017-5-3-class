const http = require('http');
const fs = require('fs');
//localhost:88/json
const server = http.createServer((req,res)=>{
  console.log(req.url);
  switch (req.url) {
    case '/1_nodejs.html':
      fs.readFile('1_nodejs.html',(error,data)=>{
        res.write(data);
        res.end();
      });
      break;
    case '/user':
      res.write('{"name":"nizp"}');
      res.end();
      break;
    default:
      res.write('404');
      res.end();
      break;
  }

});

server.listen(88);

