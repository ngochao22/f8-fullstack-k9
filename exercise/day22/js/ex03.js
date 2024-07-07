var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

var separateArr = function (arr) {
    arr = arr.flat(Infinity);
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var arrSeparate = [];
        for (var j = i + 1; j < arr.length; j++) {
            if (typeof arr[i] === typeof arr[j]) {
                arrSeparate.push(arr[i], arr[j]);
            }
        }
        newArr.push(arrSeparate);
    }
    newArr = newArr.filter(function (value) {
        if (value.length) {
            return value;
        }
    });
    console.log(newArr);
};
separateArr(arr);
