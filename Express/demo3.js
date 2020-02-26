const express = require('express');
const  bodyParser = require('body-parser');
//创建网站服务器
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get('/req1',(req,res)=>{
    res.send(req.query.a + "-" + req.query.b)
});


app.listen(7799)
console.log('server is running...');