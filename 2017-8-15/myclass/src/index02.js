import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Children from './newDay/Children';
 let a = require('./img/2.jpg');
 /*
  建议图片地址引入线上地址。
*/
 //<img src="http://pic2.ooopic.com/12/32/24/38bOOOPIC6f_1024.jpg" />
ReactDOM.render(
  <Children>
    <a href="javascript:;">新闻</a>
    <a href="javascript:;">体育</a>
    <a href="javascript:;">游戏</a>
    <img src={a} />
    
  </Children>,document.getElementById('app'));

if(module.hot){
  module.hot.accept();
}
