define(function(require,exports,module){
  var a = require('1'); //对象
  var b = require('2');//对象
  // exports.c输出的返回值是对象。
  
  
  exports.c = a.a + b.abc;
});