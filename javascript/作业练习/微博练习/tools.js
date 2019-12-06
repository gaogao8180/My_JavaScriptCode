function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function $(id) {
    return document.getElementById(id);
}

// 封装一个函数 对元素注册事件
function addEventListener(ele, eventName, fn) {
    // 能力检测
    if (ele.addEventListener) {
        ele.addEventListener(eventName, fn);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + eventName, fn);
    } else {
        ele["on" + eventName] = fn;
    }
}

// 移除事件
function removeEventListener(ele, eventName, fn) {
    // 能力检测
    if (ele.removeEventListener) {
        ele.removeEventListener(eventName, fn);
    } else if (ele.detachEvent) {
        ele.detachEvent("on" + eventName, fn);
    } else {
        ele["on" + eventName] = null;
    }
}