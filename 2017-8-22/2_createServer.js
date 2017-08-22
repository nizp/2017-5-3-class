const http = require('http');
// console.log(http);

//创建了一个服务器
const server = http.createServer((request,response)=>{
  /*
    request：请求  可以访问到浏览器发送的信息
    response: 响应  向浏览器发送信息
  */
  // console.log(request.url);
  // response.write('hehe');
  response.write('{"name":"nizp"}');
  response.end();
  
});

server.listen(89);

