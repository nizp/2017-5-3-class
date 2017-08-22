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
      let act = '';
      let userName = '';
      let password = '';
      let obj = {code:1};
      
      for(var i=0;i<arrData2.length;i++){
        if(arrData2[i].split('=')[0] == 'act'){
          if(arrData2[i].split('=')[1] == 'add'){
            act = 'add';
          }
        }else if(arrData2[i].split('=')[0] == 'username'){
          userName = decodeURI(arrData2[i].split('=')[1]);
        }else if(arrData2[i].split('=')[0] == 'password'){
          password = arrData2[i].split('=')[1];
        }
      }
      if(!act)act = 'login';
      
      // console.log(act,userName,password)
      
      //判断"数据库"中有没有用户名,有用户名就不能注册，没有用户名才能注册
      if(act == 'add'){
        if(arr.find(e => e.username === userName)){
          obj.msg = '换个名字再来,一直在等ni哟!';
        }else{
          arr.push({username:userName,password:password});
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