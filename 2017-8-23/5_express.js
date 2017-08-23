const express = require('express');
const app = express();
var bodyParser = require('body-parser');

/*
  app.get('/',function(){})
  app.post('/',function(){})
  app.use('/',function(){})
  
  send(不但可以放字符串还可以放对象..)
  
  中间件，插件
  
  static --- 专门管理静态资源的
  
  
*/
// app.get('/',function(res,req){
//   req.send({num:0});
//   req.end();
// });
//
const arr = [
  {username:'小管管',password:123456},
  {username:'小秦秦',password:54321},
  {username:'大仙仙',password:123456}
];
let str = '';
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/user',function(req,res){
  //console.log(req.body);
  let json = req.body;
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
    
    res.send(JSON.stringify(obj));
    res.end();
  }

});


app.use(express.static('www'));

app.listen(90);

