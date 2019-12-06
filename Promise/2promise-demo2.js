// 自己封装自己用
// 导入自己的Promise
let Promise = require("./promise");
let p = new Promise(function(resolve,reject) {
    // console.log("ok");
    // // resolve reject
   
    // reject("自制力差");
    setTimeout(()=>{
        reject("无聊");
    },1000);
});
p.then((value)=>{
    console.log("success"+value);
},(reason)=>{
    console.log("error"+reason);
});
p.then((value)=>{
    console.log("success"+value);
},(reason)=>{
    console.log("error"+reason);
});
