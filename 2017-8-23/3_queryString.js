const querystring = require('querystring');
const url = require('url');
let str = 'http://loaclhost:89/user?foo=中文&abc=xyz&cba=123';
console.log(url.parse(str,true));
/*
  query:（将字符串?号后面的数据给你截出来）
    如果parse的第二个参数写了true，那么就解析成对象
  pathname: 路径  /user

*/
