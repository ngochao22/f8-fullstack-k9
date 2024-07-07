var arrA = [1, 4, 3, 2, 10, 5, 9];
var arrB = [5, 2, 6, 7, 1, 10];

var newArr = [];
arrA.forEach(function (value) {
    if (arrB.includes(value)) {
        newArr.push(value);
    }
});
document.write(newArr);
