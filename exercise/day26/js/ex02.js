Array.prototype.filter2 = function (fn) {
    if (typeof fn !== "function") {
        return;
    }
    var arr = this;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        var result = fn(value);
        if (result) {
            newArr.push(result);
        }
    }
    return newArr;
};

var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
var newUsers = users.filter2(function (value) {
    if (value !== "Item 2") {
        return value;
    }
});
console.log(newUsers);
