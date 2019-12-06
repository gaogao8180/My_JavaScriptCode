//obj运动元素
//target目标值
//attr 操作的属性
function move(obj,json,callback) {
    clearInterval(obj.timer);
    var json_start = {

    };
    for (var attr in json){
        if (attr === "opacity"){
            json_start[attr] = parseFloat(getStyle(obj,attr))*100;
        }else{
            json_start[attr] = parseInt(getStyle(obj,attr));
        }
    }
    obj.timer = setInterval(()=>{
        var current;
        var speed;
        for(var attr in json){
            if(attr === "opacity"){
                current = parseFloat(getStyle(obj,attr))*100;
            }else {
                current = parseInt(getStyle(obj,attr));
            }
            if(current === json[attr]){
                clearInterval(obj.timer);
                if(callback){
                   callback();
                }
            }else {
                if(attr === "opacity"){
                    speed =(json[attr] - json_start[attr]) / 10;
                    obj.style[attr] = (current + speed) /100;
                }else {
                    speed =(json[attr] - json_start[attr]) / 10;
                    obj.style[attr] = (current + speed) + "px";
                }
            }
        }
    },30);
}

function getStyle(obj,attr) {
    if(window.getComputedStyle){
        return getComputedStyle(obj,false)[attr];
    }else {
        return obj.currentStyle[atrr];
    }
}