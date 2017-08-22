const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
  // //当路径后面为html或者js结尾的就进www目录
  // if(/(\.html$)|(\.js$)/.test(req.url)){
  //   fs.readFile('1_nodejs.html',(error,data)=>{
  //     res.write(data);
  //     res.end();
  //   });
  // }else{
  //
  // }
  if( req.url != '/favicon.ico'){
    let url = 'www' + (req.url = (req.url == '/'?'/index.html':req.url));
    console.log(url);
    if(/user/.test(req.url)){
      res.write('{"name":"mahui"}');
      res.end();
    }else{
      fs.readFile(url,(error,data)=>{
        res.write(data);
        res.end();
      });
    }
  };
}).listen(90);