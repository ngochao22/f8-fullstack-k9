var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newArr = [];

var checkArr = function (arr) {
    arr.forEach(function (value) {
        if (Array.isArray(value)) {
            checkArr(value);
        } else {
            newArr.push(value);
        }
    });
    return newArr;
};
console.log(checkArr(arr));
