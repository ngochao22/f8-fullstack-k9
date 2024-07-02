var numbers = [1, 5, -3, 54, 34, 55.55, 7, 12];

var checkNumber = function (arr) {
    var newNumbers = [];
    var sum = 0;

    for (var number of arr) {
        var checkNumber = false;
        if (number <= 1 || number % 1 !== 0) {
            continue;
        }

        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                checkNumber = true;
                break;
            }
        }

        if (!checkNumber) {
            newNumbers[newNumbers.length] = number;
        }
    }
    console.log(newNumbers);
    if (!newNumbers.length) {
        return "không có số nguyên tố";
    }

    for (var value of newNumbers) {
        sum += value;
    }

    return "Tổng số nguyên tố trong mảng là: " + sum / newNumbers.length;
};
document.write(checkNumber(numbers));
