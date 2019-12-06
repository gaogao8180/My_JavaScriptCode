//封装物体运动的函数

function animate(obj,sec,json,callback) {
    clearInterval(obj.timer);//确保函数只有一个定时器
    obj.timer = setInterval(function () {
        var current;
        for(var attr in json){
            if (attr === 'opacity'){
                current = parseFloat(getStyle(obj,'opacity')) * 100;
            }else {
                current = parseInt(getStyle(obj,attr));
            }

            var step = (json[attr]-current)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            if(current === json[attr]){
                clearInterval(obj.timer);
                if(callback){
                    callback();
                    return;
                }
            }
            if(attr === 'opacity'){
                obj.style[attr] = (current + step) / 100;
            }else {
                obj.style[attr] = current + step + 'px';
            }
        }
    },sec);
}

//获取元素最终样式
function getStyle(obj,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,false)[attr];
    }else {
        return obj.currentStyle[attr];
    }
}