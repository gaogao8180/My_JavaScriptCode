// Promise 原生js提供一个类
// new Promise() 需要传第一个executor 执行函数 该函数立刻执行
// promise本身含义是承诺 默认状态时等待态 调用resolve 成功 调用reject 失败
// 默认状态时等待态 调用resolve 状态从等待态变成成功态 调用reject 失败 状态从等待态变成失败态
let p = new Promise(function(resolve,reject){
    setTimeout(() => {
        reject("因为无聊");
    }, 1000);
});
// 一个promise实例可以多次调用then
p.then((value)=>{
    console.log("success"+value);
},(reason)=>{
    console.log("error"+reason);
});
p.then((value)=>{
    console.log("success"+value);
},(reason)=>{
    console.log("error2"+reason);
});
console.log("ok2");