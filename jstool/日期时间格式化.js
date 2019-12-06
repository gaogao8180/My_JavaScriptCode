function dateToString(d) {
    var year = d.getFullYear();
    var month = toTwo(d.getMonth() + 1);
    var day = toTwo(d.getDate());
    var h = toTwo(d.getHours());
    var m = toTwo(d.getMinutes());
    var s = toTwo(d.getSeconds());
    var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var weekday = arr[d.getDay()];
    var str = `${year}年${month}月${day}日  ${h}:${m}:${s} ${weekday}`;
    return str
}

function toTwo(v) {
    return v < 10 ? '0' + v : v;
}

console.log(dateToString(d));