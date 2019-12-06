// Promise 原生js提供一个类
// new Promise() 需要传第一个executor 执行函数 该函数立刻执行
// promise本身含义是承诺 默认状态时等待态 调用resolve 成功 调用reject 失败
// 默认状态时等待态 调用resolve 状态从等待态变成成功态 调用reject 失败 状态从等待态变成失败态
let p = new Promise(function(resolve,reject){
    console.log("ok1");
    resolve("良心发现");
    reject("自制力差");
});
p.then((value)=>{
    console.log("success"+value);
},(reason)=>{
    console.log("error"+reason);
});
console.log("ok2");