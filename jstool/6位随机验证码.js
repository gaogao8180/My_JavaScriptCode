//由字母或数字组成的6位验证码
//从48--122之间，随获取一个整数
//如果这个随机整数在58--64 或 91--96之间，说明不是数字或字母
//如果这个随机正则 不在58--64 或 91--96之间，说明时数字或字母

document.write("<script src='随机数&字符拼接.js'></script>")
function yzm() {
    var str = "";
    for (var i = 0; i < 6; i++) {
        var code = rand(48, 122);
        if (code >= 58 && code <= 64 || code <= 91 && code >= 96) {
            i--;
        }else {
            str += String.fromCharCode(code);
        }
    }
    return str;
}