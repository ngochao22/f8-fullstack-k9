var numbers = [5, 1, 9, 4, 8, 10, 2, -7];
var element = 4;

var sortNumber = function (arr) {
    for (var i in arr) {
        var minIndex = i;
        if (arr[i] % 1 !== 0) {
            return;
        }

        for (var j = +i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
};
console.log(sortNumber(numbers));
