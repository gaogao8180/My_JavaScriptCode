const express = require('express');
//创建网站服务器
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/news',(req,res)=>{
    res.send("Welcome to news page...");
});


app.listen(7788)
console.log('server is running...');