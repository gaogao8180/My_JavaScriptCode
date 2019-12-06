let fs = require("fs");

//发布 订阅

function Eventemit() {
    this._arr = [];
}

//订阅
Eventemit.prototype.on = function (cb) {
    this._arr.push(cb);
}

//发布
Eventemit.prototype.emit = function (cb) {
    this._arr.forEach(fn=>fn.apply(this,arguments));
}

let e = new Eventemit();
let teacher ={};
e.on(function (value,key) {
    teacher[key] = value;
    if(Object.keys(teacher).length === 2){
        console.log(teacher);
    }
});
/*
e.on(function () {
    console.log(1);
})

e.emit();
*/

fs.readFile("./nodejs/paralle/a.txt","utf8",function (err,data) {
    if(err) return console.log(err);
    //发布
    e.emit(data,"name");
});
fs.readFile("./nodejs/paralle/b.txt","utf8",function (err,data) {
    if(err) return console.log(err);
    //发布
    e.emit(data,"age");
});