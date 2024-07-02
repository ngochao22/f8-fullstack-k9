var numbers = [5, 1, 9, 8, 10, 2, -7];
var element = -4;

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
    var insertNumber = function (number) {
        var newNumber = [];
        newNumber.length = arr.length + 1;

        if (number > arr[arr.length - 1]) {
            for (var i in arr) {
                newNumber[i] = arr[i];
            }
            newNumber[newNumber.length - 1] = number;
            return newNumber;
        }

        if (number < arr[0]) {
            newNumber[0] = number;
            for (var i in arr) {
                newNumber[+i + 1] = arr[i];
            }
            return newNumber;
        }

        var numberIndex = 0;
        for (var i in arr) {
            newNumber[i] = arr[i];
            if (number >= arr[+i - 1] && number <= arr[i]) {
                newNumber[i] = number;
                numberIndex = i;
                break;
            }
        }

        for (var i = +numberIndex + 1; i <= newNumber.length - 1; i++) {
            newNumber[i] = arr[i - 1];
        }

        document.write(newNumber);
    };
    return insertNumber;
};
var insertNumber = sortNumber(numbers);
insertNumber(element);
