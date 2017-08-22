const http = require('http');
const fs = require('fs');
const arr = [
  {username:'小管管',password:123456},
  {username:'小秦秦',password:54321},
  {username:'大仙仙',password:123456}
]
http.createServer((req,res)=>{
  if( req.url != '/favicon.ico'){
    let url = 'www' + (req.url = (req.url == '/'?'/index.html':req.url));
  //  console.log(decodeURI('%E5%B0%8F%E7%A7%A6%E7%A7%A6'));
    if(/user/.test(req.url)){
      let arrData =  req.url.split('?')[1];
      let arrData2 = arrData.split('&');
      let json = {};
      let obj = {code:1};
      
      arrData2.forEach(e=>{
        let arr2 = e.split('=');
        json[arr2[0]] = arr2[1];
      });
      // console.log(json);

      // //判断"数据库"中有没有用户名,有用户名就不能注册，没有用户名才能注册
      if(json.act == 'add'){
        if(arr.find(e => e.username === json.userName)){
          obj.msg = '换个名字再来,一直在等ni哟!';
        }else{
          arr.push({username:json.userName,password:json.password});
          obj.msg = '你好，朋友，系好安全带，咱们马上就起飞';
          obj.code = 0;
        }
      }else if(act == 'login'){
      
      }
      // console.log(1)
      //res.setHeader('Content-Type', 'text/html');
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.write(JSON.stringify(obj));
      res.end();
    
    }else{
      fs.readFile(url,(error,data)=>{
        res.write(data);
        res.end();
      });
    }
  };
}).listen(90);