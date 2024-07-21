Array.prototype.push2 = function (...args) {
    var arr = this;
    for (var arg of args) {
        arr[arr.length] = arg;
    }
    return arr;
};

var items = [1, 2, 4];
console.log(items.push2(55, 7, 8));
