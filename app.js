//创建web服务器
const express=require('express');
var app=express();
//新浪云中的node.js服务器不允许使用其他端口 
//客户端请求说的是80，新浪云内部自动转向到5050端口
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(5050);