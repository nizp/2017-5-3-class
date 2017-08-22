const fs = require('fs');

/*
  writeFile:写文件：
    writeFile(文件名,'内容',回调(error))
    
  unlink(path,回调)  异步
  unlinkSync(path)  同步
  
*/
// fs.writeFile('2.txt','我是呵呵2',(error)=>{
//   if(error){console.log('创建失败')};
//
//   console.log('ok');
//
// });
//
  
  // fs.unlink('2.txt',()=>{
  //   console.log('删除成功');
  // });
  
  fs.unlinkSync('1.txt');
  
  console.log('删除成功');
  
  