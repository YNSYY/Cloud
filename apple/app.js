//使用express构建web服务器
const express=require('express');
const bodyParser=require('body-parser');
const session = require('express-session');

/*引入路由模块*/
const users=require("./routes/users");
const cart=require("./routes/cart");

/*构建服务器*/ 
var app=express();
var server=app.listen(3000);

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//2.1引入跨域模块-->加载跨域访问模块
const cors=require('cors');

//2.2:配置允许哪个程序哪个端口访问
app.use(cors({
  origin:["http://127.0.0.1:3000","http://localhost:3000"],
  credentials:true
}))

//托管静态资源到public目录下
app.use(express.static('public'));

app.use(session({
    secret: '128位随机字符串',
    resave: true,
    saveUninitialized: true,
  }))
  //req.session

/*使用路由器来管理路由*/
app.use("/users",users);
app.use("/cart",cart);