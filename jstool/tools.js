
//查找元素ID
function $(id) {
    return document.getElementById(id);
}

// 封装一个函数 对元素注册事件
function addEventListener(ele,eventName,fn) {
    // 能力检测
    if(ele.addEventListener) {
        ele.addEventListener(eventName,fn);
    } else if(ele.attachEvent) {
        ele.attachEvent("on"+eventName,fn);
    } else {
        ele["on"+eventName] = fn;
    }
}

// 移除事件
function removeEventListener(ele,eventName,fn) {
    // 能力检测
    if(ele.removeEventListener) {
        ele.removeEventListener(eventName,fn);
    } else if(ele.detachEvent) {
        ele.detachEvent("on"+eventName,fn);
    } else {
        ele["on"+eventName] = null;
    }
}

//获取两个日期时间差
function getInterval(start,end) {
        var diff = end.getTime() - start.getTime();
        diff = diff/1000;
        var day,hour,minute,second;
        day = Math.floor(diff/(24*60*60));
        hour = Math.floor(diff/(60*60)%24);
        minute =Math.floor(diff/60%60);
        second = Math.floor(diff%60);
        return{
            day,
            hour,
            minute,
            second
        }
}

//获取两个数之间的随机整数
function getrandom(max,min) {
    return  Math.round(Math.random()*(max-min)+min);
}

//产生一个随机颜色
function getcolor() {
    var str = '123456789abcdef';
    var color = '#';
    //循环6次，每次产生一个随机数
    for (var i=0; i<6;i++){
        var num = getrandom(0,15);
        color += str[num];
    }
    return color;
}












