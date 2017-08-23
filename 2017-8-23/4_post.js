const http = require('http');
const fs = require('fs');
const URL = require('url');
const queryString = require('querystring');


const arr = [
  {username:'小管管',password:123456},
  {username:'小秦秦',password:54321},
  {username:'大仙仙',password:123456}
];

//user
http.createServer((request,response)=>{
  if(request.url !== '/favicon.ico'){
    let str = '';
    let urlObj = URL.parse(request.url,true);
    if(urlObj.pathname == '/user'){
    
      //post请求，每次都会进on('data')中，
      //当数据传输完成时进end
      request.on('data',(data)=>{
        str += data;
      });
      request.on('end',()=>{
        let json = queryString.parse(str);
        let obj = {};
        if(!json.act){
          obj.code = 3;
          obj.msg = '参数错误';
        }else{
          switch (json.act) {
            case 'add':
              //注册
              if(arr.find(e=>e.username == json.username)){
                //用户名已经被注册
                obj.code = 2;
                obj.msg = '用户名已经被注册';
              }else{
                //注册成功，要把数据放到数据库中
                arr.push({username:json.username,password:json.password})
                obj.code = 0;
                obj.msg = '注册成功';
                obj.users = json.username;
              }
              break;
            case 'login':
              //登录
              /*
                判断是否有这个用户名
                判断，用户名密码是否正确
              */
              let find = arr.find(e=>e.username == json.username);
              //用户存在
              if(find){
                if(json.password == find.password){
                  obj.code = 0;
                  obj.msg = '登录成功';
                  obj.users = json.username;
                }else{
                  obj.code = 2;
                  obj.msg = '用户名或密码错误';
                }
              }else{
                //用户不存在
                obj.code = 1;
                obj.msg = '没有这个用户';
              }
              break;
            default:
              obj.code = 3;
              obj.msg = '参数错误';
              break;
          }
          
          response.write(JSON.stringify(obj));
          response.end();
        }
      });
    
    
    }else{
      //说明走静态文件
    
      let fileName = 'www';
      request.url = (request.url === '/'?'/index.html':request.url)
      fs.readFile(fileName+request.url,(error,data)=>{
        response.write(data);
        response.end();
      });
    }
  }
  
  // response.write('hello');
  // response.end();
  // console.log(request.url);
  
}).listen(89);

