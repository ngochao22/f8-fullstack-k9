var numbers = [1, 5, -3, 54, 34, 55.55];
var max = numbers[0];
var min = numbers[0];
var maxIndex = 0;
var minIndex = 0;

var getMaxAndMinNumber = function (arr) {
    for (var i in arr) {
        if (arr[i] % 1 !== 0) {
            continue;
        }

        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }

        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    var textMax = `Số lớn nhất trong mảng là ${max} và nằm ở vị trí ${
        +maxIndex + 1
    }`;
    var textMin = `Số nhỏ nhất trong mảng là ${min} và nằm ở vị trí ${
        +minIndex + 1
    }`;
    var text = `${textMax} và ${textMin}`;
    return text;
};
document.write(getMaxAndMinNumber(numbers));
