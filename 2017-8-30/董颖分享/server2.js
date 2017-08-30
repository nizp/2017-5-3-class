
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer( { port:8888  } );
wss.on('connection',function(ws){
    ws.on('message',function(ms){
        //获取到前端传来的数据
        console.log(ms)
        ws.send('后台发给你的数据')
    })
})