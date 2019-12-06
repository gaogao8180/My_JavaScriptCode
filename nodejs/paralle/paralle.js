let fs = require("fs");
let teacher = {};

function after(times,callback) {
    return function (key,value) {
        teacher[key] = value;
        if (--times === 0){
            callback(teacher);
        }
    }
}

let newFn = after(2,function (res) {
    console.log(res);
});

fs.readFile("./nodejs/paralle/a.txt","utf8",function (err,data) {
    if(err) return console.log(err);
    newFn("name",data)
});
fs.readFile("./nodejs/paralle/b.txt","utf8",function (err,data) {
    if(err) return console.log(err);
    newFn("age",data)
});