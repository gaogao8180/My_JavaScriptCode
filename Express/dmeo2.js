const express = require('express');
//创建网站服务器
const app = express();

app.get('/req1',(req,res,next)=>{
    res.send("ok1");
    next();
});
app.get('/req1',(req,res)=>{
    console.log(222);
});

app.listen(7799)
console.log('server is running...');