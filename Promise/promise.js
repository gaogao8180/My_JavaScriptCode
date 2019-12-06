// 自己实现Promise类

function Promise(executor) {
    // 定义一个状态 表示当前promise状态
    let _this = this;
    _this.status = "pending"; // 默认promise状态是等待态
    _this.value = undefined;
    _this.reason = undefined;
    function resolve(value) {
        // 只能从等待态变成功态
        if (_this.status === "pending") {
            _this.status = "fulfilled";// 状态变为成功态
            _this.value = value;
        }
    }

    function reject(reason) {
        //  // 只能从等待态变失败态
        if (_this.status === "pending") {
            _this.status = "rejected"; //  状态变为失败态
            _this.reason = reason;
        }
    }
    executor(resolve, reject);
}

// 定义then方法
Promise.prototype.then = function (onFulfilled, onRejected) {
    let _this = this;
    if (_this.status === "fulfilled") {
        onFulfilled(_this.value);
    }
    if (_this.status === "rejected") {
        onRejected(_this.reason);
    }
}

// 导出该构造函数
module.exports = Promise;