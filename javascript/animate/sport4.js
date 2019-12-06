// obj 运动的元素
// json {attr:target,attr2:target2}
// move(box,{"width":400,"height":300})
// w 200---->400  (400-200)/50 4
// h 200---->300  (300-200)/50 2

// {k:v,k:v,...} key必须由双引号
/*
  循环对属性进行操作
*/
function move(obj, json, callback) {
    clearInterval(obj.timer);
    // 记录每个属性的初始值
    var json_start = {};
    for (var attr in json) {
        if (attr === "opacity") {
            json_start[attr] = parseFloat(getStyle(obj, attr)) * 100;
        } else {
            json_start[attr] = parseInt(getStyle(obj, attr));
        }
    }
    /*
      "width"    210px
      "height"  200 === 4000  current  100
      "opacity" 100 === 100


    */
    obj.timer = setInterval(() => {
        var current;
        var speed;
        for (var attr in json) {
            if (attr === "opacity") {
                current = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                current = parseInt(getStyle(obj, attr));
            }
            // 对当前值进行判断
            if (current === json[attr]) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            } else {
                if (attr === "opacity") {
                    var speed = (json[attr] - current) / 10;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);// 保证数据不丢失
                    obj.style[attr] = (current + speed) / 100;
                } else {
                    var speed = (json[attr] - current) / 10; // 缓冲运动原理
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);// 保证数据不丢失
                    obj.style[attr] = (current + speed) + "px";
                }
            }
        }
    }, 30);
}


// 10  200+10+10。。。= 300
// 30  100+30+。。。。 = 400
// 7   30+7+7+。。。 = 100


function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, false)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}